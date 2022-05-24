class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            < header class="tm-header" id = "tm-header" >
                <div class="tm-header-wrapper">
                    <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="tm-site-header">
                        <h1 class="text-center">Ryan's Blog</h1>
                    </div>
                    <nav class="tm-nav" id="tm-nav">
                        <ul>
                            <li class="tm-nav-item active"><a href="index.html" class="tm-nav-link">
                                <i class="fas fa-home"></i>
                                Blog Home
                            </a></li>
                            <li class="tm-nav-item"><a href="./post/Stat_pattern.html" class="tm-nav-link">
                                <i class="fas fa-pen"></i>
                                Statistical Ptn recognition
                            </a></li>
                            <li class="tm-nav-item"><a href="./post/GitSetup.html" class="tm-nav-link">
                                <i class="fas fa-pen"></i>
                                GitHub Setup
                            </a></li>
                            <li class="tm-nav-item"><a href="./post/Jupyter Notebook.html" class="tm-nav-link">
                                <i class="fas fa-pen"></i>
                                Fastest way to open .ipynb
                            </a></li>
                        </ul>
                    </nav>
                    <div class="tm-mb-65">

                        <a href="https://github.com/TwilightSpar/Ryan-Wang" class="tm-social-link">
                            <i class="fab fa-github tm-social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/zhenge-wang-7022aa199/" class="tm-social-link">
                            <i class="fab fa-linkedin tm-social-icon"></i>
                        </a>
                    </div>
                    <p class="tm-mb-80 pr-5 text-white">
                        This is a blog displaying my course note. Hope some of my note will be helpful!
                    </p>
                </div>
            </header >
            `
    }

}
customElements.define('my-header', MyHeader)
