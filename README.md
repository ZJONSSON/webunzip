# webunzip - CLI tool
webunzip is a CLI tool that allows quick unzipping of selected files from a web-based zip file.

installation:
```
npm install -g webunzip
```

usage:

```
webunzip [url]
```

Example:  Unzipping selected files from a 1.2gb archive in less than 100ms
```
webunzip https://dumps.wikimedia.org/other/poty/poty2007.zip
```
You can then select the files you want to unzip immediately using the arrow keys and space to select. 

![image](https://user-images.githubusercontent.com/1082488/62337979-bffa5100-b4a4-11e9-97ff-f34a30ecdf2d.png)

When selection is done, press enter to start concurrent download/unzip of the selected files.
![image](https://user-images.githubusercontent.com/1082488/62337992-cee10380-b4a4-11e9-826b-fbe84ce9a652.png)