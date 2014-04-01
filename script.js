<!DOCTYPE html>
<html>
<body>
<script>

function loadXMLDoc(dname)
{
  xhttp=new XMLHttpRequest();
  xhttp.open("GET",dname,false);
  try {xhttp.responseType="msxml-document"} catch(err) {} // Helping IE
  xhttp.send("");
  return xhttp;
}

var x=loadXMLDoc("https://raw.githubusercontent.com/aniksa/js/master/books.xml");
var xml=x.responseXML;
path="/bookstore/book[price>35]/title";

// code for IE
if (window.ActiveXObject || xhttp.responseType=="msxml-document")
{
xml.setProperty("SelectionLanguage","XPath");
nodes=xml.selectNodes(path);
for (i=0;i<nodes.length;i++)
  {
  document.write(nodes[i].childNodes[0].nodeValue);
  document.write("<br>");
  }
}

// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
{
var nodes=xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
var result=nodes.iterateNext();

while (result)
  {
  document.write(result.childNodes[0].nodeValue);
  document.write("<br>");
  result=nodes.iterateNext();
  }
}

</script>
</body>
</html>

