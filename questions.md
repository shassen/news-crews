# Questions:

1. If I fetch a resource from an api, can I pick and choose what key's of the json object I want to save in my own db?
Yes I can.

2. When I create a user(assuming I require a password), is this handled somewhere other than the model - save method?
Yes it is!

3. ESLint, how do I configure this correctly? I have struggled on multiple occassions to get this up and running..
Success!

4. Do I even need an article or categories table in my db? I think I only need that table in the event there is a comment posted..

5. express(static(public)) - Is this essentially saying use the html templates and style them with css and retain those properties when consolidating into partials?
No, it's sending those files in public out as flat resources
Its making sure the file isn't altered or changed to another format.

6. 

<!-- <div>
    <h2>Comments:</h2>
        <% comment.forEach((c) => { %>
        <h2>Posted by: <%= c.author %></h2>
        <p><%= c.content %></p>
        <a href="<%= c.url %>"><%= c.url %></a>
        <% }) %>
  </div>
  <br /> -->