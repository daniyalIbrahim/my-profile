package com.daniyal.profile.backend.model;

import org.springframework.stereotype.Component;
/**
 * Date :August 05,2020
 * @author Daniyal Ibrahim
 * @version 1.0
 *
 */
@Component
public class user {

    private String emailAddress;

    public String getEmailAddress() {
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

}
