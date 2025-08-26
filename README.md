# 🔨 Technical Challenge - UDS Company ⚙️

## 📌 1. Introduction
This test plan aims to validate the primary functionalities testing Swag Labs application in your [Frontend](https://www.saucedemo.com/) and [Restful-booker API](https://restful-booker.herokuapp.com/apidoc/index.html) versions, ensuring users have a consistent and error-free experience. 
The tests will be automated using **Cypress** with **JavaScript**, and the structure is based on the **project object model (POM)**.

---

## 📌 2. Scope
The tests will cover the following key functionalities:

✅ Cypress test automation 

✅ DOM element manipulation 

✅ Behaviour verification 

✅ HTTP request handling 

✅ Database query testing 

✅ Documentation practices 

✅ Problem-solving approach 


---

## 📌 3. Testing Approach
**Tool:** Cypress

**Project File Structure**
The final POM with Cypress was structured with 2 folder belows:

1. e2e folder (include Frontend and API tests)
```bash
-Final path: cypress/e2e
                      |- apiBookerTest.cy.js
                      |- loginAndBuyTest.cy.js
```

2. pages folder (include functional classes):

```bash
- cypress/pages
            |- cartPage.js
            |- checkoutCompletePage.js
            |- checkoutOverviewPage.js
            |- checkoutPage.js
            |- inventoryPage.js
            |- loginPage.js
```

**Types of Tests:**  
- Application behaviour 
- Functionality

---

## 📌 4. Test Cases
The 6 test cases are located in the e2e folder and must adhere to the business rules described below. 

### **🛠️ Fronted tests**  
| Test name                   | Test Case                          | Steps                                                                                                                     | Expected Result                       |
|----------------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Valid login, add product in cart and purchase             | User tries to login with valid credentials | 1. Open login page<br> 2. Enter email valid email and password<br> 3. Click "Login" button<br> 4. Choose a product and add into cart clicking in "Add to cart" button<br> 5. Number of product is signalized in front of the cart<br> 6. Click "Checkout" button<br> 7. Open checkout page and insert informations<br> 8. Click "Continue" button<br> 9. Open checkout overview page and click "Finish button<br> 10. Open checkout complete page with message "Thank you for your order!"<br> | Message: "Thank you for your order!"<br>            |
| Invalid login                | User logs with wrong username and password          | 1. Open login page<br>2. Enter invalid credentials<br> 3. Click "login" and error message appear.           | Message: "Epic sadface: Username and password do not match any user in this service"          |

### **🧪 Cypress API Tests**  
| Test name               | Test Case                           | Steps                                                                                                                       | Expected Result                            |
|------------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| Valid User Login       | Create booking and validate response body testing | 1. Send POST request to `/login` with valid dates<br>2. Return the same data with valid response <br>3. Check for `authorization` property | Response status 200     |
| Search for booking firstname and verification of bookingID list   | Firstname and bookingID confirmation test   | 1. Send a GET to a url with the firstname product<br> 2. Validate status and message | Response status 200    |
| Booking error with invalid payload      | Booking error testing        | 1. Send POST request to `/booking` with a body thats include a invalid payload<br>2. Check error message in response | Response status 400 or 500 values    |
| Search for a invalid name      | Firstname error testing        | 1. Send GET request to `/booking` with a url thats include de firstname of an inexistent registration<br> | Response status 200 with a empty array    |

## 📌 5. Setting up the environment

### Requirements
- Node.js is installed on your machine.
- Cypress is installed globally or locally in the project.

### Installation
1. Clone this repository:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

2. Install Cypress dependencies in a package.json:
```bash
npm install
```
## 📌 6. Test execution
The user can execute a Cypress test in a headless or interactive mode. 

- Headless mode:

1. Activate Cypress in a headless mode:
```bash
npx cypress run
```
2. Execute all tests:
```bash
npm tests
```

3. Execute specific test:
```bash
npx cypress run --spec <path to the test file>
```
- Interactive mode:

1. Insert in the script section of the package.json file the code below:
```bash
"scripts": {
  "cy:open": "cypress open",
  "test": "cypress run" 
  },
```
2. Open Cypress display and choose the tests to execute:
```bash
npm run cy:open
```

---

## 📌 6. Conclusion
This plan covers the essential flows required by the AmbevTech QA position test. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing! Created with 💖 by Alisson Bucchi**