package main

import (
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	products := GetProducts()

	headers := map[string]string{
		"content-type":                "application/json; charset=utf-8",
		"access-control-allow-origin": "*"}

	if search, ok := req.QueryStringParameters["search"]; ok {
		products = SearchProduct(products, search)
	}

	if len(products) == 0 {
		return events.APIGatewayProxyResponse{
			StatusCode: 404,
		}, nil
	}

	res, err := json.Marshal(products)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(res),
		Headers:    headers,
	}, nil
}

func main() {
	lambda.Start(handler)
}
