package floresnataren.duenios.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Order(1)
    @Configuration
    public static class RestConfiguration extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .antMatcher("/user/**")
                    .cors()
                    .and()
                    .csrf()
                    .disable() // we don't need CSRF because our token is invulnerable
                    .authorizeRequests()
                    .antMatchers(HttpMethod.POST, "/user/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
                    // this disables session creation on Spring Security
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }

    }


    @Order(2)
    @Configuration
    public static class WebConfiguration extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.exceptionHandling().accessDeniedPage("/403");
            http

                    .authorizeRequests().antMatchers("/listCita/**").authenticated()
                    .and()
                    .authorizeRequests()
                    .antMatchers("/cita/**")
                    .authenticated()
                    .antMatchers(HttpMethod.POST,"/user/JSON").permitAll();

        }


    }
}