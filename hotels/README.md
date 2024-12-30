# Node Hotel Application

The **Node Hotel** application is a Node.js-based system developed using the **Express.js** framework, with **MongoDB** as the chosen database. This application manages information related to persons (staff) and menu items. It exposes specific endpoints to handle **CRUD (Create, Read, Update, Delete)** operations for both persons and menu items.

---

## Endpoints

### **Persons**

#### 1. **Add a Person**
- **Endpoint:** `POST /person`
- **Description:** Adds a person to the system with details such as name, role, etc.

#### 2. **Get All Persons**
- **Endpoint:** `GET /person`
- **Description:** Retrieves a list of all persons in the system.

#### 3. **Get Persons by Work Type**
- **Endpoint:** `GET /person/:workType`
- **Description:** Retrieves a list of persons based on their work type (e.g., chef, waiter, manager).

#### 4. **Update a Person**
- **Endpoint:** `PUT /person/:id`
- **Description:** Updates the details of a specific person identified by their ID.

#### 5. **Delete a Person**
- **Endpoint:** `DELETE /person/:id`
- **Description:** Deletes a person from the system based on their ID.

## Data Models

### **Person**

The **Person** data model represents information about staff members in the hotel.

#### Fields:
- **name:** `String` (Person's name)
- **age:** `Number` (Person's age)
- **work:** `Enum` (Role in the hotel, such as chef, waiter, manager)
- **mobile:** `String` (Person's mobile number)
- **email:** `String` (Person's email address, unique)
- **address:** `String` (Person's address)
- **salary:** `Number` (Person's salary)

#### Accessible Link:
https://hotels-nih8.onrender.com

#### Example:

```json
{
  "name": "John Smith",
  "age": 25,
  "work": "chef",
  "mobile": "123-456-7890",
  "email": "johns@example.com",
  "address": "Main Street",
  "salary": 80000
}
