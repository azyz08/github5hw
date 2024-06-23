import "./style.scss"
import React from 'react';
import { Carousel } from 'antd';

export default function Azizbek() {
    return (
        <>
            <Carousel className="carousel" arrows infinite={false}>
                <div>
                    <div className="text">
                        <h1>The new phones are <br /> here take a look.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <a href="">Explore</a>
                    </div>
                <img src="https://s3-alpha-sig.figma.com/img/3c1e/4caa/09390e4696bd452c8420dbe4a7164d7b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5OFF4mlfgFkZl7yBqGqNxyB30kvlCvy5FqgXw1s-m7m9hQ0Lfh8wPRSwOzQm5PJoRgZUgQS0iq3H6W~BY7UVy96gLLKkKsZR~kzXSiIe98hNw0JA-RUaybBoJsZzCq0-49d0dyXFIxtpjenaYhiHJN5cwIgN1GFVuyfYAsHVgJ2WsVBHH7B-DQO7vBE~~BfTs0rhPytTpYBOpadlpf9CEdw8OHWpmOtyoYXGQRmP6~i9CjH~-RFPgiEwUONB54UxjbwAniuu-rZ7z0QigIYA-kZtiufhGo2mKtMGxhWsB9Lirq9ITNr6BIcFw-oEk7q1Q~5dHjyggJ1TRWY0M4PNQ__" alt="" />
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </Carousel>
        </>
    )
}