package com.fizzbuzz.controller;

import java.util.List;

import com.fizzbuzz.service.FizzBuzzService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@Api( "FizzBuzz API")
@RestController
@RequestMapping("/fizzbuzz")
public class FizzBuzzController {

    @Autowired
    private FizzBuzzService fizzBuzzService;

    @GetMapping("")
    @ApiOperation(value = "Send FizzBuzz list")
    public List<String> getFizzBuzz() {
        return fizzBuzzService.getFizzBuzz(1, 100);
    }

    @GetMapping("/{numberStart}-{numberEnd}")
    @ApiOperation(value = "Send FizzBuzz list with two numbers (range)")
    public ResponseEntity getFizzBuzz(@PathVariable final int numberStart, @PathVariable final int numberEnd) {
        if (numberStart >= numberEnd) {
            throw new ResponseStatusException(
                    HttpStatus.UNPROCESSABLE_ENTITY, "Incoherent range");
        }

        return new ResponseEntity(fizzBuzzService.getFizzBuzz(numberStart, numberEnd), HttpStatus.OK);
    }
}
