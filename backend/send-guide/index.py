"""
Отправка руководства RDB на email пользователя через SMTP.
"""

import json
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Invalid JSON"})}

    email = (body.get("email") or "").strip()
    if not email or "@" not in email:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Укажите корректный email"})}

    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Руководство по методологии RDB"
    msg["From"] = f"RDB Методология <{smtp_user}>"
    msg["To"] = email

    html = """
<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f7fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#0D1B2E;border-radius:16px 16px 0 0;padding:40px 48px 32px;">
          <p style="margin:0 0 12px;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Result-Driven Business</p>
          <h1 style="margin:0;font-size:32px;font-weight:700;color:#ffffff;letter-spacing:-0.03em;line-height:1.1;">Формула маркетинга RDB</h1>
          <p style="margin:16px 0 0;font-size:16px;color:rgba(255,255,255,0.6);line-height:1.6;">7 методик анализа конверсии — всё, что нужно для системного роста бизнеса.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:40px 48px;">

          <p style="margin:0 0 32px;font-size:16px;color:#1A2B4A;line-height:1.7;">Ниже — полное руководство по методологии RDB. Сохраните письмо, чтобы возвращаться к нему в работе.</p>

          <!-- Method 1 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">01</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Карта точек потери</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Выявите, на каком этапе воронки уходит большинство клиентов. Методика позволяет визуализировать каждый шаг пути и найти узкие места до начала любых изменений.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 2 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">02</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">RDB-матрица гипотез</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Приоритизация гипотез по трём осям: потенциал роста, стоимость внедрения, скорость проверки. Фокусируйте усилия только на задачах, которые дадут результат быстро.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 3 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">03</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Анализ ценностного предложения</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Проверка соответствия оффера реальным болям аудитории. Структурированный фреймворк для оценки и переработки УТП без субъективных суждений.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 4 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">04</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Тест на доверие</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">7 критериев оценки доверия к странице: социальные доказательства, экспертность, прозрачность условий. Чек-лист с конкретными рекомендациями по каждому пункту.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 5 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">05</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Метод контрастного A/B</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Не стандартное A/B-тестирование, а радикальные изменения с измерением значимости. Протокол запуска, остановки и интерпретации результатов без статистических ошибок.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 6 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">06</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Сегментационный аудит</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Анализ поведения разных сегментов внутри одной воронки. Часто лучший оффер для одной аудитории разрушает конверсию другой — методика помогает это обнаружить.</p>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #EDF2F7;margin:0 0 28px;">

          <!-- Method 7 -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:0;">
            <tr>
              <td width="36" valign="top" style="font-family:monospace;font-size:13px;color:rgba(13,27,46,0.2);padding-top:3px;font-weight:600;">07</td>
              <td style="padding-left:16px;">
                <p style="margin:0 0 6px;font-size:18px;font-weight:600;color:#0D1B2E;letter-spacing:-0.02em;">Цикл итерации RDB</p>
                <p style="margin:0;font-size:15px;color:#4A5568;line-height:1.65;">Замкнутый процесс: гипотеза → эксперимент → результат → масштабирование. Система регулярных ретроспектив и накопления знаний внутри команды.</p>
              </td>
            </tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:28px 48px;border-top:1px solid #EDF2F7;">
          <p style="margin:0;font-size:13px;color:rgba(26,43,74,0.4);line-height:1.6;">Вы получили это письмо, потому что запросили руководство на сайте RDB. Данные не передаются третьим лицам.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
"""

    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
