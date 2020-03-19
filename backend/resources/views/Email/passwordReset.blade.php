@component('mail::message')
Check HMS Account password reset link <br>

Here you lost your password, sorry for that, click the bottom button to reset your password.

@component('mail::button', ['url' => 'http://'.$url.'./reset_password/'.$token])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
