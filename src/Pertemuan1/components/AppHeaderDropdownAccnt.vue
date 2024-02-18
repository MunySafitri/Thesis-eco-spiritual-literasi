<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Account Settings
      </CDropdownHeader>
      <!-- <CDropdownItem> <CIcon icon="cil-user" /> Profile </CDropdownItem>
      <CDropdownItem> <CIcon icon="cil-settings" /> Settings </CDropdownItem> -->
      <RouterLink to="/overview">
        <CDropdownItem>
          <CIcon icon="cilArrowThickToLeft" /> Overview
        </CDropdownItem>
      </RouterLink>
      <CDropdownDivider />
      <RouterLink to="/home">
        <CDropdownItem> <CIcon icon="cil-lock-locked" /> Logout </CDropdownItem>
      </RouterLink>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/img/preloader.png'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>
