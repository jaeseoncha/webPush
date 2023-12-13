package com.example.webPush.remarkablesoft.site.webPush.web.api.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping( "/api/user/v1" )
public class WebPushLoginAPIController {
		

		@PostMapping( value = "/loginApi_login" )
		public ResponseEntity<?> getUser () {
				return ResponseEntity.ok( true );
		}


		
		
}
