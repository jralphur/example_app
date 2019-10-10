/* for the traditional version of the app */
var xhttp = new XMLHttpRequest()
  
/* create an event handler */
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.createElement('ul')
    ul.setAttribute('class', 'notes')

    /* for every array element, create an list item object,
     * append it to the parent ul object, then fill the li
     * object with the note item
     */
    data.forEach(function(note){
      var li = document.createElement('li')
      
      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content))
    })

    /* put the ul and children from the div with id: notes */
    document.getElementById("notes").appendChild(ul)
  }
}

/* HTTP GET on data.json, will call onreadystatechange() on runtime */
xhttp.open("GET", "/data.json", true)
xhttp.send()
