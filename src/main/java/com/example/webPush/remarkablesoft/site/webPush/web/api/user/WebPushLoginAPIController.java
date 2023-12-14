package com.example.webPush.remarkablesoft.site.webPush.web.api.user;

import com.example.webPush.remarkablesoft.service.UserInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping( "/api/user/v1" )
public class WebPushLoginAPIController {
		

		@PostMapping( value = "/loginApi_login" )
		public ResponseEntity<?> getUser ( @RequestBody UserInfo userInfo ) {

			System.out.println( "userInfo = " + userInfo );

				return ResponseEntity.ok( true );
		}


		
		
}
