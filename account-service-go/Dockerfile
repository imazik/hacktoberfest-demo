FROM golang:latest AS builder
ADD . /go/src/github.com/imazik/hacktoberfest-demo/account-service-go
WORKDIR /go/src/github.com/imazik/hacktoberfest-demo/account-service-go
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o /main .
RUN ls /

# final stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=builder /main ./
RUN chmod +x ./main
ENTRYPOINT ["./main"]
EXPOSE 9000
