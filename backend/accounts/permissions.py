from rest_framework.permissions import BasePermission

class IsEmployee(BasePermission):
    message = "accessing this data is only for stuff"
    def has_permission(self, request, view):
        try:
            if not  request.user.is_authenticated:
                return False
            if request.user.role.name in ['Employee', 'Manager', 'Admin']:
                return True
        except:
            pass
        
        return False


class IsManager(BasePermission):
    message = "accessing this data is only for stuff"
    def has_permission(self, request, view):
        try:
            if not  request.user.is_authenticated:
                return False
            if request.user.role.name in ['Admin', 'Manager']:
                return True
        except:
            pass
        
        return False


class IsAdmin(BasePermission):
    message = "accessing this data is only for stuff"
    def has_permission(self, request, view):
        try:
            if not request.user.is_authenticated:
                return False
            if request.user.role.name == "Admin":
                return True
        except:
            pass
        
        return False