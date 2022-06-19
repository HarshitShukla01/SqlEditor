# SQL EDITOR

A React based web application for running SQL query.

Website : https://sql-editor-pro.web.app

## Features
- It is a responsive website
- In this a user can create or delete new Tabs that help to run multiple quries parallely.
- User can view all Table and theier column (in a tree like fashion).
- User can search , filter or sort data.
- User can download the result in csv format or directly print the result.
- User can choose among different themes for thier editor.
- User copy query using copy button
- It can render large files without breaking the browser

## Skills
HTML, CSS, JavaScript , React , Material UI

## React Library Used
- react-ace
- react-tabs



## How To Run
+ Download ZIP folder from [HERE](https://github.com/HarshitShukla01/SqlEditor/archive/refs/heads/main.zip)
+ Extract the ZIP
+ Open folder in code Editor
+ Open terminal in current folder
+ Type `npm install`
+ Then, type `npm run start`
+ From browser access the website at localhost with port 3000

## Page Loading Time

GT METRIX GRADE [(Click to visit website)](https://gtmetrix.com/)

![sq1](https://user-images.githubusercontent.com/75080333/174466041-aa53b450-b170-4f6c-b8fa-2be1259188d8.png)
![sq2](https://user-images.githubusercontent.com/75080333/174466042-cd87f001-d094-42e4-ba4b-191b3558c218.png)
![sq3](https://user-images.githubusercontent.com/75080333/174466067-fb0497b9-d037-4208-bc64-7487be224d7f.png)


Pingdom Website Speed Test [(Click to visit website)](https://tools.pingdom.com/)

![sq4](https://user-images.githubusercontent.com/75080333/174466049-e8ef1871-6088-499d-a03e-0189e46b4799.png)

PageSpeed Insights [(Click to visit website)](https://pagespeed.web.dev/)

![sq5](https://user-images.githubusercontent.com/75080333/174466045-489f7f07-84a0-42d9-a998-4e90b26679d9.png)

## Step for optimization

- I removed extra modules that is imported but never used
- Using Ace-editor instead of Code Mirror for creating editor because rendering time of code mirror is higher than ace-editor
- I used firebase to deploy the website because what ever file we upload is cached on SSDs at CDN edges around the world and served as gzip or Brotli
