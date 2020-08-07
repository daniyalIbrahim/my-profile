package com.daniyal.profile.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.daniyal.profile.backend.model.user;
import com.daniyal.profile.backend.service.MailService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class MailController {


    @Autowired
    private MailService notificationService;

    @Autowired
    private user user;

    /**
     *
     * @return
     */
    @PostMapping("/mail/{SenderName}/{SenderEmail}/{Subject}/{Message}")
    public ResponseEntity<?> sendMail(@PathVariable String SenderName, @PathVariable String SenderEmail, @PathVariable String Subject, @PathVariable String Message) {
        try{
            this.notificationService.sendMailToDaniyal(SenderName,SenderEmail,Subject,Message);
            return ResponseEntity.ok().body("The mail was sent to daniyal sucessfully!");
        }catch(Exception e){
            e.printStackTrace();
        }
            return ResponseEntity.ok().body("The mail was not delievered!");

    }


}
