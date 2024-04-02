<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="mx-auto d-lg-none" to="/overview">
        <!-- <CIcon :icon="logo" height="48" alt="Logo" /> -->
        <img
          class="black-logo"
          style="height: 5rcap"
          src="../../assets/img/logo.png"
          alt="Logo"
        />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="/overview">
            <CButton color="primary" variant="outline">
              <i class="bi bi-arrow-bar-left"></i>
              Pertemuan 1</CButton
            ></CNavLink
          >
          <!-- <CIcon icon="cil-arrow-bottom" size="xxl" />
            <h5 style="padding-top: 8px">Pertemuan 1</h5> -->
        </CNavItem>
        <!-- <CNavItem>
          <CNavLink href="#">Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
        </CNavItem> -->
      </CHeaderNav>
      <CHeaderNav>
        <!-- <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem> -->
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <!-- <CContainer fluid>
      <AppBreadcrumb />
    </CContainer> -->
  </CHeader>
</template>

<script>
// import AppBreadcrumb from './AppBreadcrumb'
import { CNavLink } from '@coreui/vue'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'

export default {
  name: 'AppHeader',
  components: {
    // AppBreadcrumb,
    AppHeaderDropdownAccnt,
    CNavLink,
  },
}
</script>
