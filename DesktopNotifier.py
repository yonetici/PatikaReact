from plyer import notification
import time
notification.notify(
title="Merhaba Sana",
message="RSS ile güncelleme geldi.",
timeout=10,
toast=False,
app_icon = "tasmanian-devil.ico"
)
time.sleep(15)
