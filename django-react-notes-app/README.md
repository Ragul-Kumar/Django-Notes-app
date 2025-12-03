# Django-React Notes App

This is a notes app built with a Django backend and a React frontend. It allows users to register, login, and create, view, and delete notes.

## Tech Stack

**Backend:** Python, Django, Django REST Framework, Simple JWT, django-cors-headers
**Frontend:** React, Vite, JavaScript, axios, react-router-dom

## About The Backend

The backend of this application is powered by Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design. For building the RESTful API, we use the **Django REST Framework (DRF)**.

### Django REST Framework

DRF is a powerful and flexible toolkit for building Web APIs. Here's how it's leveraged in this project:

- **Serialization:** DRF's serializers allow us to convert complex data types, such as Django model instances, into native Python datatypes that can then be easily rendered into JSON. This is crucial for the communication between the Django backend and the React frontend.
- **Views & ViewSets:** We use DRF's `APIView` class to define our API endpoints. These views handle the logic for processing incoming HTTP requests (GET, POST, PUT, DELETE) and returning the appropriate responses.
- **Authentication & Permissions:** For securing the API, we use `simple-jwt` to handle JSON Web Token (JWT) authentication. This ensures that only authenticated users can access certain endpoints, like creating or deleting notes. DRF's permission classes are used to control access to different parts of the API.
- **Routers:** To automatically generate URL patterns for our views, we use DRF's routers. This helps in keeping the URL configuration clean and maintainable.

## Installation

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Create a virtual environment:
    ```bash
    python -m venv venv
    ```
3.  Activate the virtual environment:
    - **Windows:**
      ```bash
      venv\Scripts\activate
      ```
    - **macOS/Linux:**
      ```bash
      source venv/bin/activate
      ```
4.  Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5.  Run the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
