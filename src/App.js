import React, { Component } from "react";
import "./styles.css";
import QuoteList from "./QuoteList.js";

export default function App() {
    return (
        <div className="App Flexbox-container">
            <div className="TextComponent Flexbox-item-1">
                <QuoteList />
                <h1>
                    "The future belongs to those who believe in the beauty of their
                    dreams."
        </h1>
                <div className="Source">
                    <h4>
                        Eleanor Roosevelt <span className="Years">(1884-1962)</span>
                    </h4>
                </div>
            </div>

            <div className="Counter Flexbox-item-2">
                <button className="PlusButton">+</button>
        10
        <button className="MinusButton  ">-</button>
            </div>
        </div>
    );
}
