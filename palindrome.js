x = -121;
temp = 0;
while (x != 0) {
  temp = temp * 10 + (x % 10);
  x = Math.trunc(x / 10);
}
