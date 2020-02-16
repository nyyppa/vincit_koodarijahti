package com.example.demo;

public class GameResult {
    int points;
    int numberOfNeededPresses;

    public GameResult(int points, int numberOfNeededPresses) {
        this.points = points;
        this.numberOfNeededPresses = numberOfNeededPresses;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getNumberOfNeededPresses() {
        return numberOfNeededPresses;
    }

    public void setNumberOfNeededPresses(int numberOfNeededPresses) {
        this.numberOfNeededPresses = numberOfNeededPresses;
    }
}
