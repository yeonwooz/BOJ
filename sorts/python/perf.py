import time
import psutil

time = time.time
p = psutil.Process()
rss = p.memory_info().rss / 2 ** 20 # Bytes to MB
memory = rss

# 메모리 사용량 코드 참고 : https://jybaek.tistory.com/895