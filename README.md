# Email is a spam or a ham

## About the project
The project has a custom machine learning model that I was able to create. This project is a POC. The project has online learning capability aswell. 
The project classifies whether the sent email is a spam or a ham. The project is using a similar model of Gmail and Yahoo. Though
the training is done at a really small scale.

## Technologies used

- ReactJS
- Django
- Machine learning
- Sckit-learn
- Pandas

## How to Run the Project

Follow these steps to run the project locally:

1. Clone the repository:
    ```
    git clone <repo>
    ```

2. Navigate to the frontend directory:
    ```
    cd frontend
    ```

3. Install frontend dependencies:
    ```
    npm install
    ```

4. Start the frontend server:
    ```
    npm start
    ```

5. Navigate to the backend directory:
    ```
    cd ../backend
    ```

6. Set up the environment:
   - Create a virtual environment depending on your preference (e.g., using Anaconda).
   
7. Install backend dependencies:
    ```
    pip install -r requirements.txt
    ```

8. Apply migrations:
    ```
    python manage.py makemigrations
    python manage.py migrate
    ```

9. Create a superuser (for Django projects):
    ```
    python manage.py createsuperuser
    ```

10. Run the backend server:
    ```
    python manage.py runserver
    ```

Now you should be able to access the project locally. 
