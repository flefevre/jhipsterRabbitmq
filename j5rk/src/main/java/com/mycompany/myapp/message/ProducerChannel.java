package com.mycompany.myapp.message;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface ProducerChannel {

    String CHANNEL = "messageChannel";

    @Output
    MessageChannel messageChannel();
}
