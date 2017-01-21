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

Example:  Unzipping selected files from a 500mb archive in less than 500ms
```
webunzip http://www2.census.gov/geo/tiger/TIGER2015/ZCTA5/tl_2015_us_zcta510.zip
```
You can then select the files you want to unzip immediately using the arrow keys and space to select. 

![image](https://cloud.githubusercontent.com/assets/1082488/22176508/5e9496d8-dfda-11e6-9261-cbca8d89d80d.png)

When selection is done, press enter to start concurrent download/unzip of the selected files.
![image](https://cloud.githubusercontent.com/assets/1082488/22176517/91dd2e10-dfda-11e6-9fed-25ec5efbe203.png)
