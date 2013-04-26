
These are experimental translators that were inspired by the gist:
https://gist.github.com/nschneid/3134386

Most of these translators work by drag and drop from the items pane. To set a
translator as the default export method go to preferences then the exports tab
and choose the default export method you want.
`cmd-shift-c` and `cmd-shift-a` only work on some items it is not clear why 
this is so from the copy to clipboard code that I have glanced at.

These translators have minimal use currently and really only have great uses
in a future verion for zotero that allow for a markdown wiki style notes. That
allow for linking to other items in the zotero database.  In this future version
of zotero it would be possible to reference a image stored in the database and
have it appear in a note using the zotero://select uri rather then its loccal
path.

## translators

zotfile: This returns the computer local path of the item. This does not work
for notes because they are not stored as a file in the file system.

zotsource: This is used to inspect the items javascript for those like myself
who do not have much experience with javascript.

zotselect-link-html: Returns a zotselect://select link in html that will bring
up the item in zotero firefox.  It should uniquely ideitify the the item.

zotfile-link-markdown: Just like for html but creates the link in markdown 
format instead.
