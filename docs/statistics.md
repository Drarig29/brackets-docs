<script type="text/javascript" src="https://unpkg.com/countup@1.8.2/dist/countUp.min.js"></script>

<style>
#stars:before {
    content: "";
    background-color: currentColor;
    display: inline-block;
    margin-right: .2rem;
    vertical-align: text-top;
    width: .9rem;
    height: .9rem;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-image: var(--md-source-stars-icon);
    mask-image: var(--md-source-stars-icon);
}
</style>

Total number of stars: <span id="stars">0</span>

<script>
fetch('https://api.github.com/users/Drarig29/repos')
    .then(res => res.json())
    .then(repos => repos.reduce((count, repo) => repo.name.match(/^brackets-/) ? count + repo.stargazers_count : count, 0))
    .then(count => new CountUp('stars', 0).update(count))
</script>
