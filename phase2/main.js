"use strict";

let sleepData = [
  {
    date: "2026-01-21",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:47",
    sleepLatencyMin: 4,
    sleepDuration: "6h23min",
    stressLevel: 3,
  }, // observation: 2026-01-21

  {
    date: "2026-01-22",
    caffeineTime: "3pm",
    caffeineAmountMg: 80,
    bedtime: "03:25",
    sleepLatencyMin: 15,
    sleepDuration: "6h31min",
    stressLevel: 3,
  }, // observation: 2026-01-22

  {
    date: "2026-01-23",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:22",
    sleepLatencyMin: 9,
    sleepDuration: "6h31min",
    stressLevel: 3,
  }, // observation: 2026-01-23

  {
    date: "2026-01-24",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "01:24",
    sleepLatencyMin: 11,
    sleepDuration: "7h27min",
    stressLevel: 2,
  }, // observation: 2026-01-24

  {
    date: "2026-01-25",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "02:32",
    sleepLatencyMin: 11,
    sleepDuration: "6h16min",
    stressLevel: 2,
  }, // observation: 2026-01-25

  {
    date: "2026-01-26",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:03",
    sleepLatencyMin: 13,
    sleepDuration: "5h59min",
    stressLevel: 3,
  }, // observation: 2026-01-26

  {
    date: "2026-01-27",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:28",
    sleepLatencyMin: 17,
    sleepDuration: "6h20min",
    stressLevel: 3,
  }, // observation: 2026-01-27

  {
    date: "2026-01-28",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:02",
    sleepLatencyMin: 27,
    sleepDuration: "5h41min",
    stressLevel: 3,
  }, // observation: 2026-01-28

  {
    date: "2026-01-29",
    caffeineTime: "3pm",
    caffeineAmountMg: 80,
    bedtime: "03:23",
    sleepLatencyMin: 5,
    sleepDuration: "6h34min",
    stressLevel: 3,
  }, // observation: 2026-01-29

  {
    date: "2026-01-30",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "none",
    sleepLatencyMin: "none",
    sleepDuration: "none",
    stressLevel: 1,
  }, // observation: 2026-01-30 (missing sleep data)

  {
    date: "2026-01-31",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "02:20",
    sleepLatencyMin: 3,
    sleepDuration: "7h59min",
    stressLevel: 3,
  }, // observation: 2026-01-31

  {
    date: "2026-02-01",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "02:28",
    sleepLatencyMin: 5,
    sleepDuration: "7h38min",
    stressLevel: 2,
  }, // observation: 2026-02-01

  {
    date: "2026-02-02",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "02:55",
    sleepLatencyMin: 5,
    sleepDuration: "6h58min",
    stressLevel: 2,
  }, // observation: 2026-02-02

  {
    date: "2026-02-03",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:11",
    sleepLatencyMin: 5,
    sleepDuration: "6h23min",
    stressLevel: 4,
  }, // observation: 2026-02-03

  {
    date: "2026-02-04",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "02:21",
    sleepLatencyMin: 6,
    sleepDuration: "7h46min",
    stressLevel: 2,
  }, // observation: 2026-02-04

  {
    date: "2026-02-05",
    caffeineTime: "3pm",
    caffeineAmountMg: 80,
    bedtime: "02:58",
    sleepLatencyMin: 5,
    sleepDuration: "6h42min",
    stressLevel: 4,
  }, // observation: 2026-02-05

  {
    date: "2026-02-06",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "03:25",
    sleepLatencyMin: 6,
    sleepDuration: "5h17min",
    stressLevel: 3,
  }, // observation: 2026-02-06

  {
    date: "2026-02-07",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "01:39",
    sleepLatencyMin: 11,
    sleepDuration: "7h35min",
    stressLevel: 3,
  }, // observation: 2026-02-07

  {
    date: "2026-02-08",
    caffeineTime: "none",
    caffeineAmountMg: 0,
    bedtime: "01:36",
    sleepLatencyMin: 4,
    sleepDuration: "7h36min",
    stressLevel: 3,
  }, // observation: 2026-02-08

  {
    date: "2026-02-09",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "02:47",
    sleepLatencyMin: 7,
    sleepDuration: "6h41min",
    stressLevel: 2,
  }, // observation: 2026-02-09

  {
    date: "2026-02-10",
    caffeineTime: "1pm",
    caffeineAmountMg: 80,
    bedtime: "01:46",
    sleepLatencyMin: 49,
    sleepDuration: "7h7min",
    stressLevel: 3,
  }, // observation: 2026-02-10
]; // list of sleep observations (Phase 2 data)

showData(sleepData);