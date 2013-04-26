{
"translatorID":"04623cf0-313c-11df-9aae-0800200c9a64",
"translatorType":2,
"label":"ZotFile Link",
"creator":"Scott Campbell, Avram Lyon",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2012-07-17 22:27:00"
}

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
        //  This returns the path on local disk where the file is located.
        // This is useful for if you want to get the path of an image to
        // include in a note. Ideally I would want to do this with the 
        // zotero://select so it would general over machines but that would
        // require editing the code that handles notes.
		Zotero.write(item.localPath);
	}
}
