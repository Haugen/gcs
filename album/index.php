<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <title>Bootstrap 4 Album</title>
</head>

<body>
  <header>
    <div class="navbar navbar-expand-md navbar-light bg-light justify-content-between">
      <a href="#" class="navbar-brand">Project Brand</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarToggle">
        <nav class="navbar-nav mr-auto text-center">
          <a href="#" class="nav-link active">Products</a>
          <a href="#" class="nav-link">About Us</a>
          <a href="#" class="nav-link">Contact</a>
        </nav>
        <form class="form-inline">
          <input type="search" class="form-control mr-sm-2">
          <button type="submit" class="btn btn-outline-info my-2 my-sm-0">Search</button>
        </form>
      </div>
    </div>
  </header>

  <main>
    <section class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">My favorite albums</h1>
        <p class="lead text-muted">These are my 9 favorite albums as of fall 2018.</p>
        <hr class="my-4" />
        <button class="btn btn-outline-info btn-lg btn-rounded">Spotify Playlist</button>
      </div>
    </section>
  </main>

  <script src="../node_modules/jquery/dist/jquery.min.js"></script>
  <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</body>

</html>
