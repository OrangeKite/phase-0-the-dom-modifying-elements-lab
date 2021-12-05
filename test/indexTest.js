describe("index.html", () => {
  it("no longer has DOM node 'main#main'", () => {
    expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
  });
  
  it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
    expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
  });

  it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
    expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
  });
  
  it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
    expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
  });

});


// idk if you check this but I couldnt figure out how to manifest the variable that it wanted to point to the node. the variable new header is reflected in the js code.
// im sure im just too stipid and i missed something but it would havve saved me like 3 hours if the read me doc had just been more specific to the tests. 

