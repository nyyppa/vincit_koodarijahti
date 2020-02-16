package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    private int counter;

    @GetMapping("increment")
    public GameResult increment() {
        counter++;
        int points = countPoints(counter);
        int numberOfNeededPresses = countNeededPresses(counter);
        return new GameResult(points, numberOfNeededPresses);
    }

    private int countPoints(int counter) {
        if (counter % 500 == 0) {
            return 250;
        } else if (counter % 100 == 0) {
            return 40;
        } else if (counter % 10 == 0) {
            return 5;
        } else {
            return 0;
        }
    }

    private int countNeededPresses(int counter) {
        return 10 - (counter % 10);
    }
}
