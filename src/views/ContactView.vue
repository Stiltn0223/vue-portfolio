<template>
    <main>
        <div class="container">
            <h1>Let's talk.</h1>
            <p>Have a question or want to work together? Email me, or leave me a message on LinkedIn below!</p>
            
            <div class="contact-container">
                <a href="https://www.linkedin.com/in/logan-stiltner/">
                    <div class="item">
                        <img src="../components/icons/linkedin-alt.svg" alt="LinkedIn Logo">
                        <p>https://www.linkedin.com/in/logan-stiltner/</p>
                    </div>
                </a>
                <a href="mailto:logan@loganstiltner.dev">
                    <div class="item" id="email">
                        <img src="../components/icons/mail.svg" alt="Mail Logo">
                        <p>logan@loganstiltner.dev</p>
                    </div>
                </a>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.container>* {
    text-align: center;
}

.container>p {
    margin-bottom: 6rem;
}

h1 {
    font-size: 3.5rem;
    padding-bottom: 2rem;
}

p {
    font-size: 1.4rem;
    text-align: center;
}

img {
    width: 7rem;
    height: 7rem;
}

#email>img {
    filter: invert(1);
}

.item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
    margin: 1em;
    transition: transform .2s;
    position: relative;
    overflow: hidden;
}


.item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: var(--vt-c-accent);
    transition: width 0.2s;
    transform-origin: left center; /* set the origin of transformation */
}

.item>* {
    padding: 1rem;
    display: inline-block;
}

.item>a>img {
    fill: #bbb !important;
}

a::after {
    content: none;
}


@media (hover: hover) {
    .item:hover {
        /* change border animation */
        /* border-left: 3px solid var(--vt-c-accent); */
        transform: translateX(0.3em);
    }

    .item:hover::before {
        width: 3px;
    }
}

.contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>