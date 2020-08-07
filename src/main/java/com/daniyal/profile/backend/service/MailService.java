package com.daniyal.profile.backend.service;

import com.daniyal.profile.backend.config.JavaMail;
import com.daniyal.profile.backend.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.logging.Logger;

@Service
public class MailService {
    private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    /*
     * The Spring Framework provides an easy abstraction for sending email by using
     * the JavaMailSender interface, and Spring Boot provides auto-configuration for
     * it as well as a starter module.
     */
    private JavaMail javaMailSender;

    /**
     *
     * @param javaMailSender
     */
    @Autowired
    public MailService(JavaMail javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendMailToDaniyal(String FromName, String From, String Subject, String Message) throws MailException{
        SimpleMailMessage mail = new SimpleMailMessage();
        JavaMailSender sender = javaMailSender.gmailMailSender();
        user me = new user();
        Date date = new Date();
        me.setEmailAddress("daniyal.ibrahim5@gmail.com");
        mail.setTo(me.getEmailAddress());
        mail.setSentDate(date);
        mail.setSubject(Subject);
        mail.setText(FromName+"\n"+"\t"+From+"\n"+date.toString()+"\n"+"\n"+"\n"+Message+"\n");
        sender.send(mail);
    }


}

