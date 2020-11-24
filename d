warning: LF will be replaced by CRLF in public/styles.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/components/App.jsx.
The file will have its original line endings in your working directory
[1mdiff --git a/public/styles.css b/public/styles.css[m
[1mindex 0c03c98..df0f124 100644[m
[1m--- a/public/styles.css[m
[1m+++ b/public/styles.css[m
[36m@@ -142,7 +142,6 @@[m [mform.create-note {[m
   box-shadow: 0 1px 5px rgb(138, 137, 137);[m
 }[m
 [m
[31m-[m
 form.create-note input,[m
 form.create-note textarea {[m
   width: 100%;[m
[1mdiff --git a/src/components/App.jsx b/src/components/App.jsx[m
[1mindex cda0e0d..ae9b4ab 100644[m
[1m--- a/src/components/App.jsx[m
[1m+++ b/src/components/App.jsx[m
[36m@@ -62,10 +62,10 @@[m [mconst App = () => {[m
             return ([m
               <Carousel.Item>[m
                 <img[m
[31m-                    className="d-block w-100"[m
[31m-                    src={bannerItem.url}[m
[31m-                    alt="A slide"[m
[31m-                />[m
[32m+[m[32m                      className="carousel-img d-block w-100"[m
[32m+[m[32m                      src={bannerItem.url}[m
[32m+[m[32m                      alt="A slide"[m
[32m+[m[32m                  />[m
                 <Carousel.Caption>[m
                     <h3 style ={{color : bannerItem.color}}>{bannerItem.title.substring(0, 30)}</h3>[m
                     <p style={{color : bannerItem.color, textAlign: "justify"}}>{bannerItem.content.substring(0, 400)}</p>[m
