package main

import (
	"fmt"
	"github.com/gocolly/colly/v2"
	"io/ioutil"
	"os"
	"path"
	"strings"
)

var (
	cdnUrl  = "http://pic03.punchbox.org/cook/"
	//baseUrl = "http://cook.coco.cn/home"
	//baseUrl = "http://cook.coco.cn/news/list"
	baseUrl = "http://cook.coco.cn/pc/picture"
)

func main() {
	// Instantiate default collector
	c := colly.NewCollector(
		// Visit only domains: hackerspaces.org, wiki.hackerspaces.org
		colly.AllowedDomains("pic03.punchbox.org", "cook.coco.cn"),
	)

	// On every a element which has href attribute call callback
	c.OnHTML("img[src]", func(e *colly.HTMLElement) {
		link := e.Attr("src")
		// Print link
		fmt.Printf("Link found: %q -> %s\n", e.Text, link)
		// Visit link found on page
		// Only those links are visited which are in AllowedDomains
		c.Visit(e.Request.AbsoluteURL(link))
	})

	c.OnHTML("link[href]", func(e *colly.HTMLElement) {
		link := e.Attr("href")
		// Print link
		fmt.Printf("Link found: %q -> %s\n", e.Text, link)
		// Visit link found on page
		// Only those links are visited which are in AllowedDomains
		c.Visit(e.Request.AbsoluteURL(link))
	})
	c.OnHTML("script[src]", func(e *colly.HTMLElement) {
		link := e.Attr("src")
		// Print link
		fmt.Printf("Link found: %q -> %s\n", e.Text, link)
		// Visit link found on page
		// Only those links are visited which are in AllowedDomains
		c.Visit(e.Request.AbsoluteURL(link))
	})

	// Before making a request print "Visiting ..."
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL.String())
	})

	c.OnResponse(func(r *colly.Response) {
		requestUrl := r.Request.URL.String()
		if strings.HasPrefix(requestUrl, cdnUrl) {
			p := strings.TrimPrefix(requestUrl, cdnUrl)
			dir, _ := path.Split(p)
			if _, err := os.Stat(dir); os.IsNotExist(err) {
				os.MkdirAll(dir, os.ModeDir|os.ModePerm)
			}
			if err := ioutil.WriteFile(p, r.Body, os.ModePerm); err != nil {
				fmt.Println(err)
				return
			}
		} else if strings.Contains(baseUrl, requestUrl) {
			str := string(r.Body)
			str = strings.ReplaceAll(str, cdnUrl, "")

			_, file := path.Split(requestUrl)
			if err := ioutil.WriteFile(file + ".html", []byte(str), os.ModePerm); err != nil {
				fmt.Println(err)
				return
			}
		}
	})

	c.Visit(baseUrl)
}
