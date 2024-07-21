FROM python:3.12

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0"]

# install the docker extension
# open the docker desktop application
# run this command -> 'docker build -t my-flask-app .'
# run 'docker run -p 5001:5000 my-flask-app' to run the program