getTutorialData Output :
```
[
  { category: 'Intro', data: [ [Object], [Object] ] },
  { category: 'Basics', data: [ [Object] ] },
  { category: 'Misc', data: [ [Object] ] }
]
```
data is sorted based on the order key in md file.


```
title: 'Displays on the page and the route. Makesure route is same as filename'
description: 'Give the description for metadata'
tutorial: Tut Name
blogorder: sorting in blog page
order: Order for sorting in tut page
category: For article category
```

```
- place all the data in docs folder
- with foldername as tutorial name
- files directly in docs folder are considered as blog articles
- file name will be the slug ( make sure the filename and title are same )

- if creating tutorial - place the name in constants.js first and then create a folder in docs with the same name as Tutorial name.
- place the articles inside this tutorial folder
- put image in public/images with the same name as tutorial name
```