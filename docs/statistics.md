<script type="text/javascript" src="https://unpkg.com/countup@1.8.2/dist/countUp.min.js"></script>

Total number of stars: <span id="stars">0</span>

<script>
fetch('https://api.github.com/users/Drarig29/repos')
    .then(res => res.json())
    .then(repos => repos.reduce((count, repo) => repo.name.match(/^brackets-/) ? count + repo.stargazers_count : count, 0))
    .then(count => new CountUp('stars', 0).update(count))
</script>
