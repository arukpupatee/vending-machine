# Vending Machine

## Prerequisites

- Install Node.js version 16 https://nodejs.org

## How to run

- Create and start docker containers
  ```zsh
  docker compose up
  ```
- Generate example data
  ```zsh
  . ./generate-data-script.sh
  ```
- Access vending machine app at http://localhost:8080

## How to test

- Run test script
  ```zsh
  . ./test-script.sh
  ```

## Features

- [x] Customers can buy products from a vending machine. When buying any product, the
      available product quantity in that machine should be decreased accordingly.
- [ ] System admins should know all vending machine locations.
- [ ] When the remaining product quantity is less than 10, the vending machine will send a
      notification to the system admin. (use any notification system such as Line, E-Mail,
      notification on website, etc.)
- [ ] System admins can update product quantity
- [ ] System admins can add new product
