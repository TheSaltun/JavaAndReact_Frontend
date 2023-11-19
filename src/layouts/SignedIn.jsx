import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" src ="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"></Image>
            <Dropdown pointing='top-left' text='Süleyman'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sigm-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
