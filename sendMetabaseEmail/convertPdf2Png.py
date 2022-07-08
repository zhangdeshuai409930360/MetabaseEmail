

import os
import fitz
import argparse
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage


def pdf_to_image(pdf_path, img_path=None, zoom_x=3, zoom_y=3, theta=0):
    """
    PDF转PNG
    :param pdf_path: pdf文件的路径
    :param img_path: 图像要保存的文件夹
    :param zoom_x: x方向的缩放系数
    :param zoom_y: y方向的缩放系数
    :param theta: 旋转角度
    :return: dst_path
    """
    if not img_path:
        img_path = os.path.abspath(os.path.join(pdf_path, '../'))

    with fitz.open(pdf_path) as pdf:
        name = os.path.basename(pdf.name)
        file_name = name.split('.')[0]
        page = pdf[0]
        # 设置缩放和旋转
        trans = fitz.Matrix(zoom_x, zoom_y).preRotate(theta)
        pm = page.getPixmap(matrix=trans, alpha=False)
        dst_path = f'{img_path}/{file_name}.png'
        # 保存
        pm.writePNG(dst_path)

    return dst_path

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='manual to this script')

    parser.add_argument('--path', type=str, default='')
    parser.add_argument('--file_name', type=str, default='')
    parser.add_argument('--sender_email', type=str, default='')
    parser.add_argument('--sender_email_pass', type=str, default='')
    parser.add_argument('--receiver_email', type=str, default='')
    parser.add_argument('--email_subject', type=str, default='')

    args = parser.parse_args()

    path = args.path
    file_name = args.file_name
    sender_email = args.sender_email
    sender_email_pass = args.sender_email_pass
    receiver_email = args.receiver_email
    email_subject = args.email_subject

    pdf_to_image(path+'/'+file_name+'.pdf')



  

