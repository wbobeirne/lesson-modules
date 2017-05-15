autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true


##[fit] APIs & SoundCloud

---

# What is an API?

- An **A** pplication **P** rogramming **I** nterface is the way we can talk to other systems separate from our code
- While APIs come in many shapes and sizes, the ones we use will either be URLs we can hit with AJAX requests, or Javascript libraries like jQuery
- The one we'll be looking at today is for SoundCloud, follow along with their [documentation on how to use it](https://developers.soundcloud.com/docs/api/sdks)

---

# Importing the JavaScript API

Just as we did with jQuery, we'll need a new script tag in the head that loads the SoundCloud JS API. This will give us access to a `SC` variable that is the SoundCloud library.

```html
<head>
  <script src="https://connect.soundcloud.com/sdk/sdk-3.1.2.js"></script>
  <!-- your custom script after... -->
</head>
```

---

# Connecting to the API

To use the SC object and make requests, we must first initialize it with a client ID. This is a unique ID tied to an application we register with Soundcloud. But you won't need to do that, I'll post the key in slack.

```js
SC.initialize({
  client_id: '[YOUR_CLIENT_ID_HERE]'
});
```

Once we've done this, we can use the API without being rejected

---

# Resolving URLs

If we know the url of a track, we can use the `.resolve` method to get more information about that track:

```js
SC.resolve("https://soundcloud.com/cherokee-official/love-your-days").then(function(response) {
  // Once we've retrieved info about the track via an
  // HTTP request, it'll be logged here.
  console.log(response);
});
```

---

# Resolving Track IDs

If we know the track id (Which we may get from search or list functions) we can use the `.get` method to make a request against the API:

```js
SC.get("/tracks/216847995").then(function(response) {
  // things to do after the tracks load...

  // this should display all relevant information regarding the track
  // e.g title, author, album art
  console.log(response);
});
```

---

# Searching for Songs

To specify a specific search term, we can pass through a `q` option:

```js
SC.get("/tracks", {
  q: "fish"
}).then(function(response) {
  // Log a response that gives us a list of
  // tracks matching the search terms
  console.log(response);
});
```

---

# Streaming a Track

To stream a song, we can pass through a `/tracks/[song id]` relative url to the `SC.stream` method.

```js
SC.stream("/tracks/216847995").then(function(player){
  // streams the track
  player.play();
});
```

---

# Streaming a Track

We can extract the track id from `SC.resolve("[url]")` to pass them through to our player.

We need only dynamically add the ID of the song we wish to stream to the URL:

```js
SC.stream("/tracks/" + trackId).then(function(player) {
  // streams the track
  player.play();
});
```
---

# Streaming a Track

Note that the `play()` method may be called on the return value of `SC.stream`.  We can tie the `play` and `pause` methods into our Jukebox programs from Tuesday.

---

# Detecting the End of a Track

To detect the end of a song, we can either use the `duration` value returned within a `setTimeout` (annoyingly complex).

Or, we can listen for the event of the song ending...

```js
SC.stream("/tracks/216847995").then(function(player) {
  // streams the track
  player.play();

  // does something when the track is done playing
  player.on("finish", function(){
    // this executes when the track is done playing
    console.log("Done-zo");
  });
});
```

---
