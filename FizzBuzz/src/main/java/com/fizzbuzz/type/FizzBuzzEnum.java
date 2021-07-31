package com.fizzbuzz.type;

public enum FizzBuzzEnum {
    FIZZ ("FIZZ"),
    BUZZ ("BUZZ"),
    FIZZBUZZ ("FIZZBUZZ");

    private final String name;

    private FizzBuzzEnum(String s) {
        name = s;
    }

    public String toString() {
        return this.name;
    }
}