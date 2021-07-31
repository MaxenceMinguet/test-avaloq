package com.fizzbuzz.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.fizzbuzz.type.FizzBuzzEnum;
import org.springframework.stereotype.Service;

@Service
public class FizzBuzzService {

    public List<String> getFizzBuzz(final int numberStart, final int numberEnd) {
        List<Integer> range = IntStream.rangeClosed(numberStart, numberEnd)
                .boxed().collect(Collectors.toList());

        return range.stream().map(FizzBuzzService::getFizzBuzz).collect(Collectors.toList());
    }

    private static String getFizzBuzz(final int number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return FizzBuzzEnum.FIZZBUZZ.toString();
        } else if (number % 3 == 0) {
            return FizzBuzzEnum.FIZZ.toString();
        } else if (number % 5 == 0) {
            return FizzBuzzEnum.BUZZ.toString();
        } else {
            return String.valueOf(number);
        }
    }
}
