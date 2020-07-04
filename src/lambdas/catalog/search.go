package main

import (
	"strconv"
	"strings"
	"unicode"

	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

// SearchProduct ...
func SearchProduct(products []Product, search string) []Product {
	fProducts := make([]Product, 0)

	stringID := strings.Split(search, "_")
	_, err := strconv.Atoi(stringID[0])
	if err == nil {
		for _, product := range products {
			if findByID(product.Style, stringID[0]) {
				fProducts = append(fProducts, product)
			}
		}

		// Will break if some product have more than 2 colors, but works for now
		if len(fProducts) > 1 && fProducts[0].ColorSlug != search {
			fProducts[0], fProducts[1] = fProducts[1], fProducts[0]
		}

	} else {
		for _, product := range products {
			if findByName(product.Name, search) {
				fProducts = append(fProducts, product)
			}
		}
	}

	return fProducts
}

func findByID(id string, search string) bool {
	return id == search
}

func findByName(name string, search string) bool {
	name = strings.ToLower(name)
	name = removeDiacrits(name)
	return strings.Contains(name, search)
}

func isMn(r rune) bool {
	return unicode.Is(unicode.Mn, r)
}

func removeDiacrits(value string) string {
	t := transform.Chain(norm.NFD, transform.RemoveFunc(isMn), norm.NFC)
	result, _, _ := transform.String(t, value)

	return result
}
